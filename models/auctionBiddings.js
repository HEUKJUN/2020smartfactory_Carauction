const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  //경매인 입찰 테이블

  const AuctionBidding = sequelize.define(
    "AuctionBidding",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Price: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
      },
    },
    {
      sequelize: sequelize,
      timestamps: true,
      modelName: "AuctionBidding",
      tableName: "auctionbiddings",
      paranoid: true,
      charset: "utf8",
      collation: "utf8_general_ci",
    }
  );

  return AuctionBidding;
};
