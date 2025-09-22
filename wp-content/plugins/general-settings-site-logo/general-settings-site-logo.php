<?php
/**
 * Plugin Name: General Settings - Site Logo
 * Description: Adds a Site Logo option to Settings → General.
 * Version: 1.0
 * Author: Jasmine
 */

add_action('admin_init', 'my_add_site_logo_to_general_settings');

function my_add_site_logo_to_general_settings() {
    // Register setting (store attachment ID)
    register_setting('general', 'site_logo_id', [
        'type'              => 'integer',
        'sanitize_callback' => 'absint',
        'default'           => 0,
    ]);

    // Add field to General Settings
    add_settings_field(
        'site_logo_id',                 // ID
        'Site Logo',                    // Label
        'my_site_logo_field_html',      // Callback
        'general'                       // Page (General Settings page)
    );
}

function my_site_logo_field_html() {
    $logo_id  = get_option('site_logo_id', 0);
    $logo_url = $logo_id ? wp_get_attachment_url($logo_id) : '';
    error_log('Test debug log entry');
    ?>
    <div>
        <input type="hidden" id="site_logo_id" name="site_logo_id" value="<?php echo esc_attr($logo_id); ?>" />
        <button type="button" class="button" id="upload_logo_button">
            <?php echo $logo_url ? 'Change Logo' : 'Upload Logo'; ?>
        </button>
        <?php if ($logo_url): ?>
            <div style="margin-top:10px;">
                <img src="<?php echo esc_url($logo_url); ?>" style="max-height:80px;" />
            </div>
        <?php endif; ?>
    </div>

    <script>
    jQuery(document).ready(function($){
        var frame;
        $('#upload_logo_button').on('click', function(e){
            e.preventDefault();
            if(frame){
                frame.open();
                return;
            }
            frame = wp.media({
                title: 'Select or Upload Site Logo',
                button: { text: 'Use this logo' },
                multiple: false
            });
            frame.on('select', function(){
                var attachment = frame.state().get('selection').first().toJSON();
                $('#site_logo_id').val(attachment.id);
                location.reload(); // reload so preview updates
            });
            frame.open();
        });
    });
    </script>
    <?php
}
