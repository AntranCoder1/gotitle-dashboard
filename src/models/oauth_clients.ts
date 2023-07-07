import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface oauth_clientsAttributes {
  id: number;
  user_id?: number;
  user_list_id: number;
  name: string;
  secret: string;
  redirect: string;
  personal_access_client: number;
  password_client: number;
  revoked: number;
  created_at: Date;
  updated_at: Date;
}

export type oauth_clientsPk = "id";
export type oauth_clientsId = oauth_clients[oauth_clientsPk];
export type oauth_clientsCreationAttributes = Optional<oauth_clientsAttributes, oauth_clientsPk>;

export class oauth_clients extends Model<oauth_clientsAttributes, oauth_clientsCreationAttributes> implements oauth_clientsAttributes {
  id!: number;
  user_id?: number;
  user_list_id!: number;
  name!: string;
  secret!: string;
  redirect!: string;
  personal_access_client!: number;
  password_client!: number;
  revoked!: number;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof oauth_clients {
    oauth_clients.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_list_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    secret: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    redirect: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    personal_access_client: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    password_client: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    revoked: {
      type: DataTypes.TINYINT,
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
    tableName: 'oauth_clients',
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
        name: "user_id_client_index",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "user_list_id_client_index",
        using: "BTREE",
        fields: [
          { name: "user_list_id" },
        ]
      },
    ]
  });
  return oauth_clients;
  }
}
