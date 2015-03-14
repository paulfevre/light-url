<?php

$app->get('/', function() use ($app) {
    return $app['twig']->render('index.html.twig');
})->bind('index');

$app->get('/{alias}', function($alias) use ($app) {
    $url = $app['db']->fetchColumn('SELECT `url` FROM `url` WHERE `alias` = ?', array($alias));
    $params = array(
        'analyticsUser' => $app['analytics.user'],
        'alias' => $alias,
        'url' => $url,
    );

    if ($url != null) {
        return $app['twig']->render('redirect.html.twig', $params);
    } else {
        return $app['twig']->render('index.html.twig');
    }
})->bind('redirect');
