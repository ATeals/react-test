import { fireEvent, render } from "@testing-library/react";

import App from "@/App";
import Profile from "@/Profile";
import Counter from "@/Counter";

describe("App", () => {
    it("Render App", () => {
        render(<App />);
    });
});

describe("Profile", () => {
    it("Profile은 이름과 나이가 랜더링 되어야 합니다.", () => {
        const utils = render(
            <Profile
                name="김민우"
                age={24}
            />
        );
        utils.getByText("김민우");
        utils.getByText("24");
        utils.getByText("24");
    });
});

describe("Counter", () => {
    it("Counter가 랜더링 되어야 합니다.", () => {
        render(<Counter />);
    });

    it("Counter는 증감 버튼과 초기 숫자를 랜더링 해야합니다.", () => {
        const component = render(<Counter />);
        component.getByText("+");
        component.getByText("-");
        component.getByText("0");
    });

    it("증가 버튼 클릭", () => {
        const component = render(<Counter />);
        const number = component.getByText("0");
        const button = component.getByText("+");

        fireEvent.click(button);
        fireEvent.click(button);

        expect(number.textContent).toBe("2");
        expect(number).toHaveTextContent("2");
    });

    it("감소 버튼 클릭", () => {
        const component = render(<Counter />);
        const number = component.getByText("0");
        const button = component.getByText("-");

        fireEvent.click(button);
        fireEvent.click(button);

        expect(number.textContent).toBe("-2");
    });
});
