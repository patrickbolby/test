function my_map_shortcode() {
    $output = '<div id="kort" style="height: 500px;"></div>';
    $output .= '<script>';
    $output .= 'var kort = L.map("kort").setView([55.6761, 12.5683], 10);';
    $output .= 'fetch("' . plugins_url( 'danish_postal_codes.geojson', __FILE__ ) . '")';
    $output .= '.then(function (response) { return response.json(); })';
    $output .= '.then(function (json) { L.geoJSON(json).addTo(kort); });';
    $output .= '</script>';
  
    return $output;
  }
  add_shortcode( 'my_map', 'my_map_shortcode' );

var kort = L.map('kort').setView([55.6761, 12.5683], 10);
fetch('danish_postal_codes.geojson')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        L.geoJSON(json).addTo(kort);
    });
