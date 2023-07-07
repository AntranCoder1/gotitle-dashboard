import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface oauth_refresh_tokensAttributes {
  id: string;
  access_token_id: string;
  revoked: number;
  expires_at?: Date;
}

export type oauth_refresh_tokensPk = "id";
export type oauth_refresh_tokensId = oauth_refresh_tokens[oauth_refresh_tokensPk];
export type oauth_refresh_tokensCreationAttributes = Optional<oauth_refresh_tokensAttributes, oauth_refresh_tokensPk>;

export class oauth_refresh_tokens extends Model<oauth_refresh_tokensAttributes, oauth_refresh_tokensCreationAttributes> implements oauth_refresh_tokensAttributes {
  id!: string;
  access_token_id!: string;
  revoked!: number;
  expires_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof oauth_refresh_tokens {
    oauth_refresh_tokens.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    access_token_id: {
      type: DataTypes.STRING(100),
      allowNull: false
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
    tableName: 'oauth_refresh_tokens',
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
        name: "access_token_index",
        using: "BTREE",
        fields: [
          { name: "access_token_id" },
        ]
      },
    ]
  });
  return oauth_refresh_tokens;
  }
}
