import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface password_resetsAttributes {
  email: string;
  token: string;
  created_at: Date;
}

export type password_resetsPk = "email" | "token";
export type password_resetsId = password_resets[password_resetsPk];
export type password_resetsCreationAttributes = Optional<password_resetsAttributes, password_resetsPk>;

export class password_resets extends Model<password_resetsAttributes, password_resetsCreationAttributes> implements password_resetsAttributes {
  email!: string;
  token!: string;
  created_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof password_resets {
    password_resets.init({
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'password_resets',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
          { name: "token" },
        ]
      },
    ]
  });
  return password_resets;
  }
}
