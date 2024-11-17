<?php
/*
plugin name: filtrepost
description: Extension qui permet de filtrer les articles
author: Emilie Desmarais
author uri: https://referenced.ca
*/

function enfile_css_js()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . "/style.css");
    $version_js =  filemtime(plugin_dir_path(__FILE__) . "js/filtrepost.js");

    wp_enqueue_style(
        "filtrepost",
        plugin_dir_url(__FILE__) . "/style.css",
        array(),
        $version_css
    );
    wp_enqueue_script(
        "filtrepost",
        plugin_dir_url(__FILE__) . "js/filtrepost.js",
        array(),
        $version_js,
        true
    );
}

add_action("wp_enqueue_script", "charger_scripts_css");