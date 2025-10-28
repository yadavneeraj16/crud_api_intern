import { Table, Column,DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./user"; 

@Table({
  tableName: "addresses",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export default class Address extends Model {
     @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => User)
   @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  street!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  pincode!: string;
  @BelongsTo(() => User)
  user!: User;
}
