<?php

$paramsGlobal = array(
    'analyticsUser' => $app['analytics.user']
);

$app->get('/', function() use ($app, $paramsGlobal) {
    $params = $paramsGlobal;
    return $app['twig']->render('index.html.twig', $params);
})->bind('home');

$app->get('/{alias}', function($alias) use ($app, $paramsGlobal) {
    $params = $paramsGlobal;
    
    // Request GET passthrough
    $params['alias'] = $alias;

    // Get data from DB
    $params['url'] = $app['db']->fetchColumn('SELECT `url` FROM `url` WHERE `alias` = ?', array($alias));

    // Does screenshot file exists
    $params['screenshotExists'] = false;
    if (is_file(__DIR__ . '/../web/user/screenshot/' . $alias . '.png')) {
        $params['screenshotExists'] = true;
    }

    if ($params['url'] !== false) {
        return $app['twig']->render('redirect.html.twig', $params);
    } else {
        return $app['twig']->render('index.html.twig');
    }
})->bind('redirect');
