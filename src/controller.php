<?php

$app->get('/', function() use ($app) {
    return $app['twig']->render('index.html.twig');
})->bind('index');

$app->get('/{alias}', function($alias) use ($app) {
    return $app['twig']->render('redirect.html.twig', array('alias' => $alias));
})->bind('redirect');
