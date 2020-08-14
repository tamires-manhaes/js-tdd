module.exports = {
  host: './src/database/database.db',
  username: 'postgres',
  password: 'docker',
  database: 'nodeauth',
  dialect: 'sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}