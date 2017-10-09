exports.up = function(knex, Promise) {
  return knex.raw(`
  CREATE TABLE \`user\` (
    \`id\` bigint(20) NOT NULL AUTO_INCREMENT,
    \`email\` varchar(255) NOT NULL,
    \`name\` varchar(255) NOT NULL,
    \`username\` varchar(255) NOT NULL,
    \`password\` varchar(255) NOT NULL,
    \`createdAt\` date DEFAULT NULL,
    PRIMARY KEY (\`id\`),
    UNIQUE KEY \`user_email_unique\` (\`email\`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`)
}

exports.down = function(knex, Promise) {
  return knex.raw(`DROP TABLE IF EXISTS \`user\``)
}
