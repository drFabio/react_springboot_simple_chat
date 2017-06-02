package example.chat;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;

@Controller
public class RegisterController {
  @Autowired UserListService userList;

    @MessageMapping("/register")
    @SendToUser("/topic/registerResponse")
    public RegisterResponse register(RegisterPayload payload, StompHeaderAccessor accessor) throws Exception {
        System.out.println("On register " + payload.getName());
        String sessionId = accessor.getSessionId();
        if (userList.addToList(sessionId, payload)) {
          return new RegisterResponse(true, payload);
        }
        return new RegisterResponse(false, payload);
    }

}
