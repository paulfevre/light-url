<?php

$app->match('/', function() use ($app) {
    return $app['twig']->render('index.html.twig');
})->bind('index');
