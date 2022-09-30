if ! pgrep ssh-agent &>/dev/null; then
  echo "$(date)" >> "$HOME/tmp/ssh-agent.log"
  echo "starting ssh-agent" >> "$HOME/tmp/ssh-agent.log"
  eval `ssh-agent -s`
  if [ -f "$HOME/.ssh/id_rsa" ]; then
    ssh-add "$HOME/.ssh/id_rsa"
  fi

  if [ -f "$HOME/.ssh/id_ed25519" ];then
    ssh-add "$HOME/.ssh/id_ed25519"
  fi
fi

echo "$(date)" >> "$HOME/tmp/ssh-agent.log"
echo "SSH_AUTH_SOCK=$SSH_AUTH_SOCK" >> "$HOME/tmp/ssh-agent.log"

ssh-add -l &>/dev/null
if [ $? -eq 2 ]; then
  echo "$(date)" >> "$HOME/tmp/ssh-agent.log"
  echo "agent restart required" >> "$HOME/tmp/ssh-agent.log"
  #echo pkill ssh-agent
fi
