<?php
function synergy_enqueue_styles() {
    // Bootstrap 5 CSS from CDN
    wp_enqueue_style(
        'bootstrap-css',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css',
        [],
        '5.3.8',
        'all'
    );

    // Odometer CSS (theme)
    wp_enqueue_style(
        'odometer-css',
        get_template_directory_uri() . '/assets/css/odometer.css',
        [],
        '1.0',
        'all'
    );

    // Theme core CSS
    wp_enqueue_style(
        'theme-core-css',
        get_template_directory_uri() . '/assets/css/theme-core.css',
        [],
        '1.0',
        'all'
    );

    // Swiper CSS from CDN
    wp_enqueue_style(
        'swiper-css',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        [],
        '11.0',
        'all'
    );

    // Main style.css
    wp_enqueue_style(
        'theme-style-css',
        get_template_directory_uri() . '/assets/css/style.css',
        [],
        '1.0',
        'all'
    );

    // Favicon / Apple Touch Icons
    // Note: favicons are not enqueued; add via wp_head with proper <link> tags
    add_action('wp_head', function() {
        $site_url = esc_url(get_site_url());
        echo '<link rel="apple-touch-icon" sizes="180x180" href="' . $site_url . '/wp-content/themes/synergy-theme/assets/img/apple-touch-icon.png">';
        echo '<link rel="icon" type="image/png" sizes="32x32" href="' . $site_url . '/wp-content/themes/synergy-theme/assets/img/favicon-32x32.png">';
        echo '<link rel="icon" type="image/png" sizes="16x16" href="' . $site_url . '/wp-content/themes/synergy-theme/assets/img/favicon-16x16.png">';
        echo '<link rel="manifest" href="' . $site_url . '/wp-content/themes/synergy-theme/assets/img/site.webmanifest">';
    });
}
add_action('wp_enqueue_scripts', 'synergy_enqueue_styles');



?>

