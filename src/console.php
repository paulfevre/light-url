<?php

use Symfony\Component\Console\Application;

$console = new Application('Console');
$app->boot();

$console
        ->register('doctrine:schema:load')
        ->setDescription('Load schema')
        ->setCode(function () use ($app) {
            $schema = require __DIR__ . '/../resource/db/schema.php';
            foreach ($schema->toSql($app['db']->getDatabasePlatform()) as $sql) {
                $app['db']->exec($sql . ';');
            }
        });

return $console;
