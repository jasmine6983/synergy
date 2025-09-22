<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'synergy' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
define('FS_METHOD','direct');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-)cf;:MC:q &O7tA1U@2`!{<UMKOXRisC`|*Y$g8eN%iLucm>K&HN+$s|}QW= 1&' );
define( 'SECURE_AUTH_KEY',  'Lhc0yLv~A4UY]Y{`F*A#H^u3Ar,+5OZ*9ZEYZ>Q k.! o9eI[UgZN9K1hk9*b:>K' );
define( 'LOGGED_IN_KEY',    'C+?$>oV`)(-}<2`9Z<0wrAx_U=%)rtrl5ok)*E0+s^i/[Sk`p8Gu0fE2H@y~Cevt' );
define( 'NONCE_KEY',        '?m!uYDK?5cEu-W!/b-]N/0Il]2T|E2%,bpI>%L*SAa=56L<dBpDE<PQdoV4c8#LQ' );
define( 'AUTH_SALT',        'Cmjg778U0x=xMAEh=Rw8i(nn/X^<%x~HV?2ZGkl/9nR]#EBPT7u:eA!>_%g02,<z' );
define( 'SECURE_AUTH_SALT', '|jN#6Us]R>c:>U4ZbkYlfk8ZBmM)DO?#mzK;?:+,:poI7}x6>h~asBWIb}eb;$t8' );
define( 'LOGGED_IN_SALT',   'kak1%l2+F~-A3D]vHEO4CpP<`]/0l%J1=j2@>r;%A$wX1}7Y&Rkcu7**&SaxiC9E' );
define( 'NONCE_SALT',       'UP`PY>dlwZqpq_p<Suc^:_0OCV;(yvpR%[@EFDFCoV}2mpD}wY36y0Q7=$=UKp14' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'syn_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', true );
define('WP_DEBUG_DISPLAY', false);
define('WP_DEBUG_LOG', true); 

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
