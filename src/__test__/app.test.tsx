import { render } from "@testing-library/react";

import App from "@/App";
import Profile from "@/Profile";

describe("App", () => {
    it("Render App", () => {
        render(<App />);
    });

    it("shows the props correctly", () => {
        const utils = render(
            <Profile
                name="김민우"
                age={24}
            />
        );
        utils.getByText("김민우");
        utils.getByText("24");
    });
});
