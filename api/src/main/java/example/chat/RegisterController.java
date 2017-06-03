package example.chat;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;

@Controller
public class RegisterController {
  @Autowired UserListService userList;
  @Autowired private SimpMessagingTemplate webSocket;
  @MessageMapping("/register")
  @SendToUser("/topic/registerResponse")
  public RegisterResponse register(RegisterPayload payload, StompHeaderAccessor accessor) throws Exception {
      String sessionId = accessor.getSessionId();
      if (userList.addToList(sessionId, payload)) {
        webSocket.convertAndSend("/topic/userEnter", new UserEnterMessage(payload.getName()));
        return new RegisterResponse(true, payload, userList.getUserList());
      }
      return new RegisterResponse(false, payload);
  }
}
