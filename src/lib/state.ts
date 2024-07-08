
type StateType = "intro" | "services" | "projects";

export default class StateMachine {

    private static state :  StateType = "intro";

    static getState = () => this.state;

    static changeState(newState: StateType) {
        this.state = newState;
    }
}