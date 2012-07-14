<?php
/*
Plugin Name: Discreet Toolbar
Plugin URI: http://trepmal.com/plugins/discreet-toolbar
Description: Hide Toolbar till cursor is near it. Front-end only.
Version: 0.3
Author: Kailey Lampert
Author URI: http://kaileylampert.com/
*/

new Discreet_Toolbar();

class Discreet_Toolbar {

	function __construct() {
		add_action( 'wp_enqueue_scripts', array( &$this, 'scripts' ) );	
	}
	
	function scripts() {
		$suffix = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ? '.dev' : '';
		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'discreet', plugins_url( "discreet$suffix.js", __FILE__ ), array('jquery'), 1, true );
	}

}