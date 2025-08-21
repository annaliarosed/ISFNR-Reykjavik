<?php
/*
Plugin Name: Minisite for Reykjavik Conference
Description: Embeds a React minisite inside WordPress.
Version: 1.0
Author: Your Name
*/

// Enqueue React app scripts and styles
// function my_react_minisite_enqueue() {
//     $plugin_dir = plugin_dir_path(__FILE__);
//     $plugin_url = plugin_dir_url(__FILE__);

//     error_log("Plugin URL base: " . $plugin_url);

//     wp_enqueue_script('nomad-auth', 'https://nomadit.co.uk/features/remote-auth/NomadAuth.min.js?v=1236', array(), null, true);
//     wp_enqueue_script(
//         'nomad-conference-loader',
//         'https://nomadit.co.uk/conference/conference-page-loader.js',
//         array(),
//         null,
//         true
//     );
//     $manifest_path = $plugin_dir . 'build/asset-manifest.json';

//     if (file_exists($manifest_path)) {
//         $manifest = json_decode(file_get_contents($manifest_path), true);
//         if ($manifest && isset($manifest['files'])) {
//             $css_path = isset($manifest['files']['main.css']) ? $manifest['files']['main.css'] : '';
//             $js_path = isset($manifest['files']['main.js']) ? $manifest['files']['main.js'] : '';

//             if ($css_path) {
//                 $css_path = preg_replace('/^\.\//', '', $css_path);
//     wp_enqueue_style('my-react-minisite-style', $plugin_url . 'build/' . $css_path, array(), null);
//             }
//             if ($js_path) {
//                 $js_path = preg_replace('/^\.\//', '', $js_path);
//                 wp_enqueue_script('my-react-minisite-script', $plugin_url . 'build/' . $js_path, array(), null, true);

//             }
//         }
//     } else {
//         // fallback to static filenames if manifest missing
//         wp_enqueue_style('my-react-minisite-style', $plugin_url . 'build/static/css/main.css', array(), null);
//         wp_enqueue_script('my-react-minisite-script', $plugin_url . 'build/static/js/main.js', array(), null, true);
//     }
// }
// add_action('wp_enqueue_scripts', 'my_react_minisite_enqueue');

// function my_react_minisite_shortcode() {
//     $explorer_html = do_shortcode('[nomad-conference tag=ecsa2026]');
    
//     error_log("Explorer HTML output: " . $explorer_html); // <- Add this

//     return "
//      <div id='react-minisite-wrapper'><div id='root'></div></div>
//     ";
// }


// add_shortcode('my_react_minisite', 'my_react_minisite_shortcode');


// Enqueue React app + Nomad loader script
function my_react_minisite_enqueue() {
    $plugin_dir = plugin_dir_path(__FILE__);
    $plugin_url = plugin_dir_url(__FILE__);

    error_log("Plugin URL base: " . $plugin_url);

   


    // ✅ React asset loading from build/asset-manifest.json
    $manifest_path = $plugin_dir . 'build/asset-manifest.json';

    if (file_exists($manifest_path)) {
        $manifest = json_decode(file_get_contents($manifest_path), true);
        if ($manifest && isset($manifest['files'])) {
            $css_path = preg_replace('/^\.\//', '', $manifest['files']['main.css'] ?? '');
            $js_path = preg_replace('/^\.\//', '', $manifest['files']['main.js'] ?? '');

            if ($css_path) {
                wp_enqueue_style('my-react-minisite-style', $plugin_url . 'build/' . $css_path, array(), null);
            }
            if ($js_path) {
                wp_enqueue_script('my-react-minisite-script', $plugin_url . 'build/' . $js_path, array(), null, true);
            }
        }
    } else {
        // fallback if manifest missing
        wp_enqueue_style('my-react-minisite-style', $plugin_url . 'build/static/css/main.css', array(), null);
        wp_enqueue_script('my-react-minisite-script', $plugin_url . 'build/static/js/main.js', array(), null, true);
    }
}
add_action('wp_enqueue_scripts', 'my_react_minisite_enqueue');

// Shortcode to render React root only — Nomad explorer DOM is handled inside React
function my_react_minisite_shortcode() {
    return '<div id="react-minisite-wrapper"><div id="root"></div></div>';
}
add_shortcode('my_react_minisite', 'my_react_minisite_shortcode');

// Allow React app routing in WP by redirecting unknown subpaths
add_filter('rewrite_rules_array', function ($rules) {
    $new_rules = array();

    // Route all subpaths of this page to the same page
    $new_rules['we-meet-across-the-world/reykjavik-iceland/.*'] = 'index.php?pagename=we-meet-across-the-world/reykjavik-iceland';

    return $new_rules + $rules;
});

add_action('init', function () {
    flush_rewrite_rules(false); // set to true only if updating the structure manually
});




