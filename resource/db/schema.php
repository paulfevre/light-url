<?php

$schema = new \Doctrine\DBAL\Schema\Schema();

$url = $schema->createTable('url');
$url->addColumn('alias', 'string', array('length' => 100));
$url->addColumn('url', 'text');
$url->addColumn('title', 'text');
$url->setPrimaryKey(array('alias'));

return $schema;
