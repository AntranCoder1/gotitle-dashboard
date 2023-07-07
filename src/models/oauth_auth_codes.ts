import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface oauth_auth_codesAttributes {
  id: string;
  user_id: number;
  user_list_id: number;
  client_id: number;
  scopes?: string;
  revoked: number;
  expires_at?: Date;
}

export type oauth_auth_codesPk = "id";
export type oauth_auth_codesId = oauth_auth_codes[oauth_auth_codesPk];
export type oauth_auth_codesCreationAttributes = Optional<oauth_auth_codesAttributes, oauth_auth_codesPk>;

export class oauth_auth_codes extends Model<oauth_auth_codesAttributes, oauth_auth_codesCreationAttributes> implements oauth_auth_codesAttributes {
  id!: string;
  user_id!: number;
  user_list_id!: number;
  client_id!: number;
  scopes?: string;
  revoked!: number;
  expires_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof oauth_auth_codes {
    oauth_auth_codes.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_list_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    }
  }, {
    sequelize,
    tableName: 'oauth_auth_codes',
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
    ]
  });
  return oauth_auth_codes;
  }
}
