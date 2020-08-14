module.exports = {
  username: 'postgres',
  password: 'docker',
  database: 'nodeauth',
  dialect: 'sqlite',
  storage: './src/database/database.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}