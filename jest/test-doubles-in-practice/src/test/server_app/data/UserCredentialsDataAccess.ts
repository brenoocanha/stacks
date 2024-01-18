import { DataBase } from "../../../app/server_app/data/DataBase";
import { UserCredentialsDataAccess } from "../../../app/server_app/data/UserCredentialsDataAccess"

const insertMock = jest.fn();
const getByMock = jest.fn();

jest.mock('../../../app/server_app/data/UserCredentialsDataAccess', () => {
  return {
    DataBase : jest.fn().mockImplementation(() => {
      return {
        insert: insertMock,
        getBy: getByMock,
      }
    })
  }
});

describe.only('UserCredentialsDataAccess', () => {
  let sut: UserCredentialsDataAccess;

  beforeEach(() => {
    sut = new UserCredentialsDataAccess();
    expect(DataBase).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call mock db', () => {
    
  })

})