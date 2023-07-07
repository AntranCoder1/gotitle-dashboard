import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { titles, titlesId } from './titles';
import type { user_lists, user_listsId } from './user_lists';
import type { users, usersId } from './users';

export interface title_ratingAttributes {
  id: number;
  owner_id?: number;
  owner_list_id?: number;
  title_id?: number;
  type: string;
  rating?: number;
  created_at: Date;
  updated_at: Date;
}

export type title_ratingPk = "id";
export type title_ratingId = title_rating[title_ratingPk];
export type title_ratingCreationAttributes = Optional<title_ratingAttributes, title_ratingPk>;

export class title_rating extends Model<title_ratingAttributes, title_ratingCreationAttributes> implements title_ratingAttributes {
  id!: number;
  owner_id?: number;
  owner_list_id?: number;
  title_id?: number;
  type!: string;
  rating?: number;
  created_at!: Date;
  updated_at!: Date;

  // title_rating belongsTo titles via title_id
  title!: titles;
  getTitle!: Sequelize.BelongsToGetAssociationMixin<titles>;
  setTitle!: Sequelize.BelongsToSetAssociationMixin<titles, titlesId>;
  createTitle!: Sequelize.BelongsToCreateAssociationMixin<titles>;
  // title_rating belongsTo user_lists via owner_list_id
  owner_list!: user_lists;
  getOwner_list!: Sequelize.BelongsToGetAssociationMixin<user_lists>;
  setOwner_list!: Sequelize.BelongsToSetAssociationMixin<user_lists, user_listsId>;
  createOwner_list!: Sequelize.BelongsToCreateAssociationMixin<user_lists>;
  // title_rating belongsTo users via owner_id
  owner!: users;
  getOwner!: Sequelize.BelongsToGetAssociationMixin<users>;
  setOwner!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createOwner!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof title_rating {
    title_rating.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    owner_list_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_lists',
        key: 'id'
      }
    },
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'titles',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rating: {
      type: DataTypes.TINYINT,
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
    tableName: 'title_rating',
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
        name: "IDX_1628330B7E3C61F9",
        using: "BTREE",
        fields: [
          { name: "owner_id" },
        ]
      },
      {
        name: "IDX_1628330B7E3C61F8",
        using: "BTREE",
        fields: [
          { name: "owner_list_id" },
        ]
      },
      {
        name: "IDX_1628330BA9F87BD",
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
    ]
  });
  return title_rating;
  }
}
