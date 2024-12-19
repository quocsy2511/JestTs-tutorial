import { authenticateLogin, sum, UsernameToLowerCase } from "../app/BasicUtil";

test.skip("should function sum run", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
  expect(result).toBeLessThan(4);
});

//chạy một test case với nhiều bộ dữ liệu khác nhau
test.only.each([
  [1, 2, 3],
  [2, 3, 5],
  [3, 4, 7],
  [4, 5, 9],
])("should correctly add %i and %i to get %i", (a, b, expected) => {
  const result = sum(a, b);
  expect(result).toBe(expected);
});

describe("Basic util test case", () => {
  it("should auth fail with empty data", () => {
    const {
      isAuthenticated,
      userDetails,
      usernameCharacters,
      usernameToLowerCase,
    } = authenticateLogin("", "");
    expect(isAuthenticated).toBeFalsy();
    expect(userDetails).toBeDefined();
    expect(usernameToLowerCase).not.toContain("six");
  });

  test("should auth success with  data", () => {
    const {
      isAuthenticated,
      userDetails,
      usernameCharacters,
      usernameToLowerCase,
    } = authenticateLogin("six", "six");
    expect(isAuthenticated).toBeTruthy();
    expect(usernameToLowerCase).toBe("six");
    expect(usernameCharacters).toContain("s");
    expect(userDetails).toMatchObject({
      username: "six",
    });
  });
});

describe("testing user name lowercase", () => {
  let username: UsernameToLowerCase;
  beforeAll(() => {
    username = new UsernameToLowerCase();
  });

  test("should throw error", () => {
    expect(() => username.ToLowerCase("")).toThrow("Invalid username");
  });

  test("should convert a valid username to lowercase", () => {
    const result = username.ToLowerCase("SIX");

    expect(result).toBe("six");
  });

  //Đây là một cách để tạo một test case chưa hoàn thành. Nó sẽ không thực sự chạy kiểm tra mà chỉ là một lời nhắc nhở cho bạn (hoặc cho đồng đội) về việc cần viết thêm bài kiểm tra sau này.
  test.todo("should convert password to lowercase");
});
