<?php

add_action('rest_api_init', function(){
  register_rest_route('wp/v2', '/posts', array(
    'methods' => 'GET',
    'callback' => 'get_blog'
  ), true);
});

function get_blog () {
  $args = array (
    'post_type' => 'post'
  );

  if($_GET['p']) {
    $args['p'] = $_GET['p'];
  }

  if($_GET['name']) {
    $args['name'] = $_GET['name'];
  }

  if($_GET['offset']) {
    $args['offset'] = $_GET['offset'];
  }

  if($_GET['paged']) {
    $args['paged'] = $_GET['paged'];
  }

  if($_GET['filter_by']) {
    $args[$_GET['filter_by']] = $_GET['filter_param'];
  }

  $query = new WP_Query($args);
  $query->get_posts();
  if ($query->have_posts()) {
    $data = array();
    while ($query->have_posts()) {
      $query->the_post();
      global $post;

        $related_posts = get_field('related_posts');
        $related_films = get_field('related_films');
        $related_events = get_field('related_events');

        array_push($data, [
          'id'            => $post->ID,
          'title'         => $post->post_title,
          'slug'          => urldecode($post->post_name),
          'content'       => $post->post_content,
          'related_posts' => ($related_posts) ? get_related_posts($related_posts) : false,
          'related_films' => ($related_films) ? get_related_posts($related_films) : false,
          'related_events' => ($related_events) ? get_related_posts($related_events) : false
        ]);
    }
  }
  $returned = new WP_REST_Response($data, 200);
  $returned->header('X-WP-Total', $query->found_posts);
  $returned->header('X-WP-TotalPages', $query->max_num_pages);
  return $returned;
}

add_action('rest_api_init', function(){
  register_rest_route('wp/v2', '/films', array(
    'methods' => 'GET',
    'callback' => 'get_films'
  ), true);
});
function get_films() {
  $args = array (
    'post_type' => 'films',
    'posts_per_page' => -1
  );
  $query = new WP_Query($args);
  $query->get_posts();
  if ($query->have_posts()) {
    $data = array();
    while ($query->have_posts()) {
        $query->the_post();
        array_push($data, [
          'title' => get_the_title()
        ]);
    }
  }
  $returned = new WP_REST_Response($data, 200);
  $returned->header('X-WP-Total', $query->found_posts);
  $returned->header('X-WP-TotalPages', $query->max_num_pages);
  return $returned;
}

function get_related_posts ($args) {
  $data = [];
  foreach ($args as $post) {
    array_push($data, [
      'id' => $post->ID,
      'title' => $post->post_title,
      'post_type' => $post->post_type,
      'slug' => urldecode($post->post_name)
    ]);
  }
  return $data;
}