<?php

use Silex\Provider\DoctrineServiceProvider;
use Silex\Provider\MonologServiceProvider;
use Silex\Provider\TwigServiceProvider;
use Silex\Provider\UrlGeneratorServiceProvider;

$app->register(new MonologServiceProvider(), array(
    'monolog.logfile' => __DIR__ . '/../var/log/app.log',
    'monolog.name' => 'app',
    'monolog.level' => 'WARNING'
));

$app->register(new TwigServiceProvider(), array(
    'twig.path' => array(__DIR__ . '/../resource/view/', __DIR__ . '/../resource/view/main/')
));

$app->register(new DoctrineServiceProvider());

$app->register(new UrlGeneratorServiceProvider());
