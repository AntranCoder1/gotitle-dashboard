import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { roles, rolesId } from './roles';
import type { user_lists, user_listsId } from './user_lists';

export interface role_user_listsAttributes {
  user_list_id: number;
  role_id: number;
}

export type role_user_listsPk = "user_list_id" | "role_id";
export type role_user_listsId = role_user_lists[role_user_listsPk];
export type role_user_listsCreationAttributes = Optional<role_user_listsAttributes, role_user_listsPk>;

export class role_user_lists extends Model<role_user_listsAttributes, role_user_listsCreationAttributes> implements role_user_listsAttributes {
  user_list_id!: number;
  role_id!: number;

  // role_user_lists belongsTo roles via role_id
  role!: roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<roles, rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<roles>;
  // role_user_lists belongsTo user_lists via user_list_id
  user_list!: user_lists;
  getUser_list!: Sequelize.BelongsToGetAssociationMixin<user_lists>;
  setUser_list!: Sequelize.BelongsToSetAssociationMixin<user_lists, user_listsId>;
  createUser_list!: Sequelize.BelongsToCreateAssociationMixin<user_lists>;

  static initModel(sequelize: Sequelize.Sequelize): typeof role_user_lists {
    role_user_lists.init({
    user_list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_lists',
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
    tableName: 'role_user_lists',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_list_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "IDX_332CA4DDA76ED395",
        using: "BTREE",
        fields: [
          { name: "user_list_id" },
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
  return role_user_lists;
  }
}
