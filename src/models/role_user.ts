import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { roles, rolesId } from './roles';
import type { users, usersId } from './users';

export interface role_userAttributes {
  user_id: number;
  role_id: number;
}

export type role_userPk = "user_id" | "role_id";
export type role_userId = role_user[role_userPk];
export type role_userCreationAttributes = Optional<role_userAttributes, role_userPk>;

export class role_user extends Model<role_userAttributes, role_userCreationAttributes> implements role_userAttributes {
  user_id!: number;
  role_id!: number;

  // role_user belongsTo roles via role_id
  role!: roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<roles, rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<roles>;
  // role_user belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof role_user {
    role_user.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'role_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "IDX_332CA4DDA76ED395",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "IDX_332CA4DDD60322AC",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
  return role_user;
  }
}
