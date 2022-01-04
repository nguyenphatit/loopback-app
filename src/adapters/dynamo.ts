import AWSHelper from '../helpers/aws-helper';

const AWS = AWSHelper.AWSObject();

export default class Dynamo {

  private _ddb: AWS.DynamoDB.DocumentClient;

  constructor() {
    this._ddb = new AWS.DynamoDB.DocumentClient();
  }

  /**
  * Getting an Item from a Table
  * @param {AWS.DynamoDB.DocumentClient.GetItemInput} params
  * @returns {Promise<AWS.DynamoDB.DocumentClient.GetItemOutput>} promise
  */
  public async get(params: AWS.DynamoDB.DocumentClient.GetItemInput): Promise<AWS.DynamoDB.DocumentClient.GetItemOutput> {
    return this._ddb.get(params).promise();
  }

  /**
  * Getting an Item by Id from a Table
  * @param {string} tableName
  * @param {string | number} id
  * @param {string} projectionExpression
  * @returns {Promise<AWS.DynamoDB.DocumentClient.GetItemOutput>} promise
  */
  public async getById(tableName: string, id: string | number, projectionExpression: string): Promise<AWS.DynamoDB.DocumentClient.QueryOutput> {
    const paramsQuery: AWS.DynamoDB.DocumentClient.QueryInput = {
      TableName: tableName,
      ProjectionExpression: projectionExpression,
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeNames: {
        '#id': 'id',
      },
      ExpressionAttributeValues: {
        ':id': id,
      }
    };
    return this._ddb.query(paramsQuery).promise();
  }

  /**
   * Putting an Item in a Table
   * @param {AWS.DynamoDB.DocumentClient.PutItemInput} params
   * @returns {Promise<AWS.DynamoDB.DocumentClient.PutItemOutput>} promise
   */
  public async put(params: AWS.DynamoDB.DocumentClient.PutItemInput): Promise<AWS.DynamoDB.DocumentClient.PutItemOutput> {
    return this._ddb.put(params).promise();
  }

  /**
   * Updating an Item in a Table
   * @param {AWS.DynamoDB.DocumentClient.UpdateItemInput} params
   * @returns {Promise<AWS.DynamoDB.DocumentClient.UpdateItemOutput>} promise
   */
  public async update(params: AWS.DynamoDB.DocumentClient.UpdateItemInput): Promise<AWS.DynamoDB.DocumentClient.UpdateItemOutput> {
    return this._ddb.update(params).promise();
  }

  /**
   * Querying a Table
   * @param {AWS.DynamoDB.DocumentClient.QueryInput} params
   * @returns {Promise<AWS.DynamoDB.DocumentClient.QueryOutput>} promise
   */
  public async query(params: AWS.DynamoDB.DocumentClient.QueryInput): Promise<AWS.DynamoDB.DocumentClient.QueryOutput> {
    return this._ddb.query(params).promise();
  }

  /**
   * Deleting an Item from a Table
   * @param {AWS.DynamoDB.DocumentClient.DeleteItemInput} params
   * @returns {Promise<AWS.DynamoDB.DocumentClient.DeleteItemOutput>} promise
   */
  public async delete(params: AWS.DynamoDB.DocumentClient.DeleteItemInput): Promise<AWS.DynamoDB.DocumentClient.DeleteItemOutput> {
    return this._ddb.delete(params).promise();
  }
}
