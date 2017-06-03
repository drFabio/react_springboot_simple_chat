package example.chat;

public class UserLeftMessage {

    private String userName;
    public UserLeftMessage() {
    }
    public UserLeftMessage(String userName) {
        this.userName = userName;
    }
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
