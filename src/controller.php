<?php

$app->get('/', function() use ($app) {
    return $app['twig']->render('index.html.twig');
})->bind('home');

$app->get('/{alias}', function($alias) use ($app) {
    // Request GET passthrough
    $params = array(
        'alias' => $alias
    );
    
    $params['analyticsUser'] = $app['analytics.user'];
    $params['url'] = $app['db']->fetchColumn('SELECT `url` FROM `url` WHERE `alias` = ?', array($alias));
    
    // Does screenshot file exists
    $params['screenshotExists'] = false;
    if (is_file(__DIR__ . '/../web/user/screenshot/' . $alias . '.png')) {
        $params['screenshotExists'] = true;
    }

    if ($params['url'] != null) {
        return $app['twig']->render('redirect.html.twig', $params);
    } else {
        return $app['twig']->render('index.html.twig');
    }
})->bind('redirect');
