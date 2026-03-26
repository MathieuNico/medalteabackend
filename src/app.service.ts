import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private dataSource: DataSource) { }

  getHello(): string {
    return 'Le serveur Core API (NestJS) fonctionne correctement !';
  }

  async testDbConnection(): Promise<any> {
    try {
      // Exécute une requête SQL basique pour vérifier que la BDD répond
      const result = await this.dataSource.query('SELECT NOW() AS current_time');
      return {
        status: 'success',
        message: 'Successfully connected to PostgreSQL!',
        time_on_db_server: result[0].current_time,
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Failed to connect to the database.',
        errorDetail: error.message,
      };
    }
  }
}
