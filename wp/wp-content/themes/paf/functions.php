<?php


add_action('rest_api_init', 'add_rest_original_endpoint');
function add_rest_original_endpoint(){
  //エンドポイントを登録
  register_rest_route('wp/v2', '/films', array(
    'methods' => 'GET',
    'callback' => 'get_films'
  ), true);
}

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
