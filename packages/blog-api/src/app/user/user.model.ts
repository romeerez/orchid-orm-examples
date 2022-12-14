import { Model } from '../../lib/model';
import { modelToZod } from 'orchid-orm-schema-to-zod';
import { UserFollowModel } from './userFollow.model';

export class UserModel extends Model {
  table = 'user';
  columns = this.setColumns((t) => ({
    id: t.serial().primaryKey(),
    username: t.text().unique().max(30),
    email: t.text().unique().email(),
    password: t.text().min(8),
    ...t.timestamps(),
  }));

  relations = {
    follows: this.hasMany(() => UserFollowModel, {
      primaryKey: 'id',
      foreignKey: 'followingId',
    }),

    followings: this.hasMany(() => UserFollowModel, {
      primaryKey: 'id',
      foreignKey: 'followerId',
    }),
  };
}

export const userSchema = modelToZod(UserModel);
