exports.up = knex => knex.schema.createTable("foods", table => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.text("category");
    table.varchar("foodimage")/*.nullable()*/;
    table.integer("cost");
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down =  knex => knex.schema.dropTable("foods");