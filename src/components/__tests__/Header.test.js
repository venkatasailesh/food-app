import { render } from "@testing-library/react";
import Header from "../Header.js";
import {StaticRouter} from  "react-router-dom/server";



test("logo should render on header",() =>{
    const header = render(
        // load header
    <StaticRouter>
        <Header />
    </StaticRouter>
    );
    const logo = header.getAllByTestId("logo");

    //check logo is loaded
    expect(logo[0].src).toBe("https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-999x999.png");
    
    // console.log(header);
});

