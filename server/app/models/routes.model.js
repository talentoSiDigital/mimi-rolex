module.exports = (sequelize, Sequelize) => {
    const Routes = sequelize.define("routes", {

        title: {
            type: Sequelize.STRING
        },
        watchSerial: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        link: {
            type: Sequelize.STRING
        },
        thumbnail: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        brand: {
            type: Sequelize.STRING
        },


    }, {
        timestamps: false
    });





    return {
        Routes

    };
};