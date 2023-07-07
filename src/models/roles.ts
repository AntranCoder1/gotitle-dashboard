import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { permission_role, permission_roleId } from './permission_role';
import type { permissions, permissionsId } from './permissions';
import type { role_user, role_userId } from './role_user';
import type { role_user_lists, role_user_listsId } from './role_user_lists';
import type { user_lists, user_listsId } from './user_lists';
import type { users, usersId } from './users';

export interface rolesAttributes {
  id: number;
  name: string;
  role_key: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type rolesPk = "id";
export type rolesId = roles[rolesPk];
export type rolesCreationAttributes = Optional<rolesAttributes, rolesPk>;

export class roles extends Model<rolesAttributes, rolesCreationAttributes> implements rolesAttributes {
  id!: number;
  name!: string;
  role_key!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;

  // roles hasMany permission_role via role_id
  permission_roles!: permission_role[];
  getPermission_roles!: Sequelize.HasManyGetAssociationsMixin<permission_role>;
  setPermission_roles!: Sequelize.HasManySetAssociationsMixin<permission_role, permission_roleId>;
  addPermission_role!: Sequelize.HasManyAddAssociationMixin<permission_role, permission_roleId>;
  addPermission_roles!: Sequelize.HasManyAddAssociationsMixin<permission_role, permission_roleId>;
  createPermission_role!: Sequelize.HasManyCreateAssociationMixin<permission_role>;
  removePermission_role!: Sequelize.HasManyRemoveAssociationMixin<permission_role, permission_roleId>;
  removePermission_roles!: Sequelize.HasManyRemoveAssociationsMixin<permission_role, permission_roleId>;
  hasPermission_role!: Sequelize.HasManyHasAssociationMixin<permission_role, permission_roleId>;
  hasPermission_roles!: Sequelize.HasManyHasAssociationsMixin<permission_role, permission_roleId>;
  countPermission_roles!: Sequelize.HasManyCountAssociationsMixin;
  // roles belongsToMany permissions via role_id and permission_id
  permissions!: permissions[];
  getPermissions!: Sequelize.BelongsToManyGetAssociationsMixin<permissions>;
  setPermissions!: Sequelize.BelongsToManySetAssociationsMixin<permissions, permissionsId>;
  addPermission!: Sequelize.BelongsToManyAddAssociationMixin<permissions, permissionsId>;
  addPermissions!: Sequelize.BelongsToManyAddAssociationsMixin<permissions, permissionsId>;
  createPermission!: Sequelize.BelongsToManyCreateAssociationMixin<permissions>;
  removePermission!: Sequelize.BelongsToManyRemoveAssociationMixin<permissions, permissionsId>;
  removePermissions!: Sequelize.BelongsToManyRemoveAssociationsMixin<permissions, permissionsId>;
  hasPermission!: Sequelize.BelongsToManyHasAssociationMixin<permissions, permissionsId>;
  hasPermissions!: Sequelize.BelongsToManyHasAssociationsMixin<permissions, permissionsId>;
  countPermissions!: Sequelize.BelongsToManyCountAssociationsMixin;
  // roles hasMany role_user via role_id
  role_users!: role_user[];
  getRole_users!: Sequelize.HasManyGetAssociationsMixin<role_user>;
  setRole_users!: Sequelize.HasManySetAssociationsMixin<role_user, role_userId>;
  addRole_user!: Sequelize.HasManyAddAssociationMixin<role_user, role_userId>;
  addRole_users!: Sequelize.HasManyAddAssociationsMixin<role_user, role_userId>;
  createRole_user!: Sequelize.HasManyCreateAssociationMixin<role_user>;
  removeRole_user!: Sequelize.HasManyRemoveAssociationMixin<role_user, role_userId>;
  removeRole_users!: Sequelize.HasManyRemoveAssociationsMixin<role_user, role_userId>;
  hasRole_user!: Sequelize.HasManyHasAssociationMixin<role_user, role_userId>;
  hasRole_users!: Sequelize.HasManyHasAssociationsMixin<role_user, role_userId>;
  countRole_users!: Sequelize.HasManyCountAssociationsMixin;
  // roles hasMany role_user_lists via role_id
  role_user_lists!: role_user_lists[];
  getRole_user_lists!: Sequelize.HasManyGetAssociationsMixin<role_user_lists>;
  setRole_user_lists!: Sequelize.HasManySetAssociationsMixin<role_user_lists, role_user_listsId>;
  addRole_user_list!: Sequelize.HasManyAddAssociationMixin<role_user_lists, role_user_listsId>;
  addRole_user_lists!: Sequelize.HasManyAddAssociationsMixin<role_user_lists, role_user_listsId>;
  createRole_user_list!: Sequelize.HasManyCreateAssociationMixin<role_user_lists>;
  removeRole_user_list!: Sequelize.HasManyRemoveAssociationMixin<role_user_lists, role_user_listsId>;
  removeRole_user_lists!: Sequelize.HasManyRemoveAssociationsMixin<role_user_lists, role_user_listsId>;
  hasRole_user_list!: Sequelize.HasManyHasAssociationMixin<role_user_lists, role_user_listsId>;
  hasRole_user_lists!: Sequelize.HasManyHasAssociationsMixin<role_user_lists, role_user_listsId>;
  countRole_user_lists!: Sequelize.HasManyCountAssociationsMixin;
  // roles belongsToMany user_lists via role_id and user_list_id
  user_lists!: user_lists[];
  getUser_lists!: Sequelize.BelongsToManyGetAssociationsMixin<user_lists>;
  setUser_lists!: Sequelize.BelongsToManySetAssociationsMixin<user_lists, user_listsId>;
  addUser_list!: Sequelize.BelongsToManyAddAssociationMixin<user_lists, user_listsId>;
  addUser_lists!: Sequelize.BelongsToManyAddAssociationsMixin<user_lists, user_listsId>;
  createUser_list!: Sequelize.BelongsToManyCreateAssociationMixin<user_lists>;
  removeUser_list!: Sequelize.BelongsToManyRemoveAssociationMixin<user_lists, user_listsId>;
  removeUser_lists!: Sequelize.BelongsToManyRemoveAssociationsMixin<user_lists, user_listsId>;
  hasUser_list!: Sequelize.BelongsToManyHasAssociationMixin<user_lists, user_listsId>;
  hasUser_lists!: Sequelize.BelongsToManyHasAssociationsMixin<user_lists, user_listsId>;
  countUser_lists!: Sequelize.BelongsToManyCountAssociationsMixin;
  // roles belongsToMany users via role_id and user_id
  users!: users[];
  getUsers!: Sequelize.BelongsToManyGetAssociationsMixin<users>;
  setUsers!: Sequelize.BelongsToManySetAssociationsMixin<users, usersId>;
  addUser!: Sequelize.BelongsToManyAddAssociationMixin<users, usersId>;
  addUsers!: Sequelize.BelongsToManyAddAssociationsMixin<users, usersId>;
  createUser!: Sequelize.BelongsToManyCreateAssociationMixin<users>;
  removeUser!: Sequelize.BelongsToManyRemoveAssociationMixin<users, usersId>;
  removeUsers!: Sequelize.BelongsToManyRemoveAssociationsMixin<users, usersId>;
  hasUser!: Sequelize.BelongsToManyHasAssociationMixin<users, usersId>;
  hasUsers!: Sequelize.BelongsToManyHasAssociationsMixin<users, usersId>;
  countUsers!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof roles {
    roles.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'roles',
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
  return roles;
  }
}
