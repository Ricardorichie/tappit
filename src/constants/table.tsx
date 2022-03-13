import { TableText as Text } from "../components/common/StyledComponents";
export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (data: any, item: any) => {
      return (
        <div>
          <Text>
            {item?.firstName} {item?.firstName}
          </Text>
        </div>
      );
    },
  },
  {
    title: "Enabled",
    dataIndex: "isEnabled",
    key: "isEnabled",
    render: (data: any, item: any) => {
      return (
        <div>
          <Text>{`${data}`}</Text>
        </div>
      );
    },
  },
  {
    title: "Valid",
    dataIndex: "isValid",
    key: "isValid",
    render: (data: any) => {
      return (
        <div>
          <Text>{`${data}`}</Text>
        </div>
      );
    },
  },
  {
    title: "Authorised",
    dataIndex: "isAuthorised",
    key: "isAuthorised",
    render: (data: any, item: any) => {
      return (
        <div>
          <Text>{`${data}`}</Text>
        </div>
      );
    },
  },
  {
    title: "Palindrome",
    dataIndex: "isPalindrome",
    key: "isPalindrome",
    render: (data: any, item: any) => {
      return (
        <div>
          <Text>{`${data}`}</Text>
        </div>
      );
    },
  },
  {
    title: "Favourite Sports",
    dataIndex: "favouriteSports",
    key: "favouriteSports",
    render: (data: any, item: any) => {
      return (
        <div>
          {item?.favouriteSports?.map((data: any, id: number) => (
            <Text key={data?.sportId}>
              <span>
                {data?.name}
                {id + 1 < item?.favouriteSports?.length && ","}{" "}
              </span>
            </Text>
          ))}
        </div>
      );
    },
  },
];
