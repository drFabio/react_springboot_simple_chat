package example.chat;

public class RegisterPayload {

    private String name;

    public RegisterPayload() {
    }
    public RegisterPayload(String name) {
        this.name = name;
    }
    public String getName () {
      return name;
    }
    public void setName (String name) {
      this.name = name;
    }
}
