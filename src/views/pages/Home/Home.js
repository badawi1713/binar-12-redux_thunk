import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../store/redux/actions/dataAction";
const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error, errorMessage } = useSelector(({userDataReducer}) => userDataReducer);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (loading) {
    return <p className="text-lg text-center font-medium">Loading</p>;
  }

  if (error) {
    return <p className="text-lg text-center font-medium text-red-500">{errorMessage}</p>;
  }

  return (
    <div className="overflow-x-auto relative rounded-md">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              First Name
            </th>
            <th scope="col" className="py-3 px-6">
              Last Name
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Avatar
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr
              key={item?.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item?.email || "-"}
              </th>
              <td className="py-4 px-6">{item?.first_name || "-"}</td>
              <td className="py-4 px-6">{item?.last_name || "-"}</td>
              <td className="py-4 px-6">
                <img
                  alt="avatar"
                  src={item?.avatar || "-"}
                  className=" w-12 h-12 rounded-full "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
