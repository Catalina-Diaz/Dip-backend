'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async me(ctx) {
        const user = ctx.state.user//usuario autenticado
        let productos = await strapi.services.productos.find({
            user: user.id
        })

        return productos;
    },
};
