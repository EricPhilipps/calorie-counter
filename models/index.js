const Dates = require('./Date');
const Calorie = require('./Calorie');
const Profile = require('./Profile')

Dates.hasMany(Calorie, {
  foreignKey: 'date_id',
  onDelete: 'CASCADE'
});

// Calorie.belongsTo (Profile, {
//   foreignKey: 'profile_id',
// });

Calorie.belongsTo(Dates, {
  foreignKey: 'date_id'
});

module.exports = { Dates, Calorie };