import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface oauth_access_tokensAttributes {
  id: string;
  user_id?: number;
  user_list_id?: number;
  client_id: number;
  name?: string;
  scopes?: string;
  revoked: number;
  expires_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export type oauth_access_tokensPk = "id";
export type oauth_access_tokensId = oauth_access_tokens[oauth_access_tokensPk];
export type oauth_access_tokensCreationAttributes = Optional<oauth_access_tokensAttributes, oauth_access_tokensPk>;

export class oauth_access_tokens extends Model<oauth_access_tokensAttributes, oauth_access_tokensCreationAttributes> implements oauth_access_tokensAttributes {
  id!: string;
  user_id?: number;
  user_list_id?: number;
  client_id!: number;
  name?: string;
  scopes?: string;
  revoked!: number;
  expires_at?: Date;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof oauth_access_tokens {
    oauth_access_tokens.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_list_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    scopes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    revoked: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'oauth_access_tokens',
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
        name: "user_id_token_index",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "user_list_id_token_index",
        using: "BTREE",
        fields: [
          { name: "user_list_id" },
        ]
      },
    ]
  });
  return oauth_access_tokens;
  }
}
