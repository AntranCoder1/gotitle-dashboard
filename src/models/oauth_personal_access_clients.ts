import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface oauth_personal_access_clientsAttributes {
  id: number;
  client_id: number;
  created_at: Date;
  updated_at: Date;
}

export type oauth_personal_access_clientsPk = "id";
export type oauth_personal_access_clientsId = oauth_personal_access_clients[oauth_personal_access_clientsPk];
export type oauth_personal_access_clientsCreationAttributes = Optional<oauth_personal_access_clientsAttributes, oauth_personal_access_clientsPk>;

export class oauth_personal_access_clients extends Model<oauth_personal_access_clientsAttributes, oauth_personal_access_clientsCreationAttributes> implements oauth_personal_access_clientsAttributes {
  id!: number;
  client_id!: number;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof oauth_personal_access_clients {
    oauth_personal_access_clients.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'oauth_personal_access_clients',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "client_id_index",
        using: "BTREE",
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
  return oauth_personal_access_clients;
  }
}
