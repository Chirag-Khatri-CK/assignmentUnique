import React from "react";
import { useSelector } from "react-redux";
import  helpers from "../utils/helpers";


const Table = () => {
  const { currentListing } = useSelector((state) => state.user);

  return (
    <>
      <table>
        <caption>
          <span>{currentListing.length}</span>
          Joinee’s
        </caption>
        <tbody>
          {currentListing.map((listData, index) => (
            // Each item in the array is rendered as a list item

            <tr key={index}>
              <td>
                <div data-label="index">#{index  +1}</div>
              </td>
              <td>
                <div data-label="username">{listData.userName}</div>
              </td>
              <td>
                <div data-label="hash">{helpers.generatePartialHexCode()}</div>
              </td>
              <td>
                <div data-label="email">{helpers.secureEmail(listData.email)}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
